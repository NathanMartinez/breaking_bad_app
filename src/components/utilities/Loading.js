import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner animation="border" variant="primary" />
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`