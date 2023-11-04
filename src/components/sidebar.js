export const Sidebar = () => {
    return (
        <div className="content-box">
            <div className="content-box-title">
                <h2>Navigation</h2>
            </div>
            <div className="content-box-body">
                <ul className="course-list">
                    <li><a href="#"><img width="32" height="32" src="images/fraud_prevention.png" alt="fraud_prevention" /><span>Money laundering and
                        fraud prevention<span></span></span></a></li>
                    <li><a href="#"><img width="32" height="32" src="images/it_security.png" alt="it_security" /><span>IT security and information
                        security</span></a></li>

                    <li><a href="#"><img width="32" height="32" src="images/data_protection.png" alt="data_protection" /><span></span>Data
                        protection</a></li>

                    <li><a href="#"><img width="32" height="32" src="images/wphg.png" alt="wphg" /><span></span>WpHG compliance</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}
