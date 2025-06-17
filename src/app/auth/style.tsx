import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  divContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(
        rgba(181, 179, 179, 0.6),
        rgba(8, 8, 8, 0.6)
      ),
      url("/formBackground.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `,
  formContainer: css`
    max-width: 600px;
    width: 300px;
    border: 2px solid yellowgreen;
    padding: 10px;
    border-radius: 10px;
    background: rgba(45, 110, 126, 0.548);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `,
  formItem: css`
    padding: 10px;
  `,
});
