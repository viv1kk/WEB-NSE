import './css/LTP_SL_Target.css'

function LTP_SL_Target()
{
    return (
        <div className='LTP_SL_Target'>
            <div>
                LTP : <span id = 'underlying-price'>@</span>
            </div>
            <div>
                SL : <span id = 'underlying-price'>@</span>
            </div>
            <div>
                Target : <span id = 'underlying-price'>@</span>
            </div>
        </div>
    );
}
export default LTP_SL_Target;