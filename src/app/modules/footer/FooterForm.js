import React from 'react';

function FooterForm() {
    return (
        <div>
            <form>
                <input type="email" placeholder="Enter Your Email" aria-label="email" />
                <button className="submit" type="submit">Gửi</button>
            </form>
        </div>
    )
}
export default FooterForm;
