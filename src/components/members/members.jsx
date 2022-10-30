import './members.css'

const Members = () => {
    return (
        <div id='members' className="container members-container">
            <h1 className="member-txt">Members</h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Luis</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, in doloribus hic voluptas ullam saepe et nisi unde error libero? Odio in cum nisi est ad quaerat vel debitis! Ea.
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
            <div className="member member-2">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Luis</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, in doloribus hic voluptas ullam saepe et nisi unde error libero? Odio in cum nisi est ad quaerat vel debitis! Ea.
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
            <div className="member member-3">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Luis</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, in doloribus hic voluptas ullam saepe et nisi unde error libero? Odio in cum nisi est ad quaerat vel debitis! Ea.
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Members;