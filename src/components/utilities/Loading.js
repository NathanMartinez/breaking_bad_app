import { Spinner } from 'react-bootstrap'

export default function Loading() {
  const style = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={style}>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}
