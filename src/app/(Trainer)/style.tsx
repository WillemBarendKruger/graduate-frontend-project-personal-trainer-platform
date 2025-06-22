import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  divContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
  `,
  formContainer: css`
    max-width: 700px;
    width: 100%;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    background: rgba(45, 110, 126, 0.548);
    padding: 20px;
    @media (max-width: 400px) {
      .food-modal-flex {
        flex-direction: column !important;
        gap: 0 !important;
      }
    }
  `,
  formItem: css`
    margin: 10px;
  `,
});
