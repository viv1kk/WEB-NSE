function ChooseIndex()
{
    return(
        <div>
            <label htmlFor='index'>Choose Index :</label>
            <select name="index" id="index">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
    );
}

export default ChooseIndex;