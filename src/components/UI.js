import styled from 'styled-components';

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
`

const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    } else {
      return '20px';
    }
  }};
`

export {
  Flex,
  Spacer
}

