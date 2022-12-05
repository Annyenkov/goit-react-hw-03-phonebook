import styled from "styled-components";

export const ListItem = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 300px;

:not(:last-of-type) {
 margin-bottom : 5px;
}
`