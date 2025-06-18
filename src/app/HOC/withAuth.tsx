import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserState, useUserActions } from "@/Providers/clientProvider";
import { Flex, Spin } from "antd";

interface IWithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (
  WrappedComponent: React.ComponentType,
  { allowedRoles = [] }: IWithAuthProps = {}
) => {
  const Wrapper: React.FC = (props) => {
    const { getCurrentUser } = useUserActions();
    const { isSuccess, isPending, user, isError } = useUserState();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      if (isChecking) {
        getCurrentUser();
        setIsChecking(false);
      }
    }, [isChecking, getCurrentUser]);

    useEffect(() => {
      if (!isChecking && !isPending) {
        if (isError || !isSuccess) {
          router.replace("/");
        } else if (isSuccess && user?.role) {
          if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
            router.replace(
              user.role === "admin" || user.role === "trainer"
                ? "/TrainerDashboard"
                : "/clientDashboard"
            );
          }
        }
      }
    }, [isPending, isSuccess, isError, user, allowedRoles, router, isChecking]);

    if (isPending || isChecking) {
      return (
        <Flex justify="center" style={{ marginBottom: 20 }}>
          <Spin size="large" />
        </Flex>
      );
    }

    if (
      isSuccess &&
      user?.role &&
      (allowedRoles.length === 0 || allowedRoles.includes(user.role))
    ) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Wrapper;
};

export default withAuth;
