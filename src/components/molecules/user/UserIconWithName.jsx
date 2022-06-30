import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <img height={160} width={160} src={image} alt={name} />
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`