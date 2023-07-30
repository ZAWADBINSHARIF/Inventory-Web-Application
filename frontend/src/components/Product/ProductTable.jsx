import { Table } from "react-bootstrap"

const ProductTable = () => {
  return (
    <div className="ProductTable py-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Brand name</th>
            <th>Description</th>
            <th>Purchase price</th>
            <th>Sale price</th>
            <th>Bar Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default ProductTable