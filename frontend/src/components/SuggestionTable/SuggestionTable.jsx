// external import 
import { Table } from "react-bootstrap"

// internal import
import SuggestionTableData from "./SuggestionTableData"

const SuggestionTable = ({ allProducts, focusInput, handleInsertValueInput }) => {

    return (
        <div className="SuggestionTable">
            <p className="pt-4 text-primary fs-3">Search Result</p>
            <div className='table'>

                <Table striped bordered hover esponsive>
                    <thead>
                        <tr>
                            <th>Bar Code</th>
                            <th>Product name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allProducts.map((item, index) => {
                            return <SuggestionTableData
                                key={index}
                                focusInput={focusInput}
                                product={item}
                                handleInsertValueInput={handleInsertValueInput}
                            />
                        })}

                    </tbody>
                </Table>

            </div>
        </div>
    )

}
export default SuggestionTable