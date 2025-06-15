import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  container: css`
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
    font-family: sans-serif;
  `,
  planHeader: css`
    margin-bottom: 2rem;
  `,
  totalsCard: css`
    margin-bottom: 2rem;
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
  `,
  mealCard: css`
    margin-bottom: 2rem;
  `,
  itemList: css`
    padding-left: 1rem;
  `,
  itemRow: css`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
  `,
}));