export const Contacts = () => {
    return (
        <div className="content-box">
            <div className="content-box-title">
                <h2>Contact</h2>
            </div>
            <div className="content-box-body contact">
                <div className="contact-item">
                    <strong className="title">Technical support</strong>
                    <p className="name">John Doe</p>
                    <p><a href="mailto:it@example.com">it@example.com</a></p>
                </div>

                <div className="contact-item">
                    <strong className="title">Content-didatics topics</strong>
                    <p className="name">Jane Roe</p>
                    <p><a href="mailto:content@example.com">content@example.com</a></p>
                </div>
            </div>
        </div>
    )
}
