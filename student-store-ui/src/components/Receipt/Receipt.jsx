import * as React from "react"
import "./Receipt.css"

export default function Receipt({ receipt }) {
    let receiptIterator = receipt;

    console.log(receipt)

    return (
        // <div class="receipt">

        // </div>

        <div class="receipt">
            <div className="reciept-container">
                {receipt}
                {receipt != null
                    ? receipt.map((receiptLine, idx) => (
                        <p>{receiptLine}</p>
                    ))
                    : <div><p>No items yet</p></div>
                }
            </div>
        </div>
    )
}
