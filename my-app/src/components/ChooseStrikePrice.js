

function ChooseStrikePrice()
{
    return(
        <div>
            <label htmlFor='strike-price'>Choose Strike :</label>
            <select name="strike-price" id="strike-price">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
    );
}

export default ChooseStrikePrice;