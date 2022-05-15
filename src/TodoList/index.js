import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: minmax(9, 1fr);
  width: 100%;
`;
const TodoSection = styled.section`
  width: 100%;
`;

export function TodoList(props) {
  return (
    <TodoSection>
     
      <Grid>
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {props.searchedTodos.map(props.render)}
        {props.children}
      </Grid>
    </TodoSection>
  );
}
