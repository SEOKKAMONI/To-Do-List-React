
function InputMemo() {
    return (
        <div className="InputMemo">
            <form className="form_memo">
                <input
                    className="input_memo"
                    placeholder="Write to do ..."
                />
                <button className="add_btn">
                    Add
                </button>
            </form>
        </div>
    )
}

export default InputMemo