

function ChooseExpDate()
{
    return(
        <div>
            <label htmlFor='exp-date'>Choose Exp :</label>
            <select name="exp-date" id="exp-date">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
    );
}

export default ChooseExpDate;