import { useState } from "react";
import axios from 'axios';

export default function Contact() {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const subjectHandler = (e) => {
        e.preventDefault();
        setSubject(e.target.value);
    }
    const messageHandler = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        let form = {
            yourname: Name,
            youremail: Email,
            yoursubject: Subject,
            yourmessage: Message
        }
        axios.post('http://localhost:3000/api/mailer', { form }).then((response) => {
            console.log(response.data);
        })
    }

    const _form = {

    }
    // const result = axios.post("http://localhost:3000/api/mailer");

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">
                <div>이름</div>
                <input
                    type="text"
                    id="name"
                    name="yourname"
                    placeholder="성함을 입력해주세요."
                    required
                    onChange={nameHandler} />
            </label>
            <label htmlFor="email">
                <div>나의 메일 주소</div>
                <input
                    type="email"
                    id="email"
                    placeholder="본인의 메일 주소를 정확히 입력해주세요."
                    name="youremail"
                    required
                    onChange={emailHandler} />
            </label>
            <label htmlFor="subject">
                <div>이메일 제목</div>
                <input
                    type="text"
                    id="subject"
                    placeholder="제목을 입력해주세요."
                    name="yoursubject"
                    required
                    onChange={subjectHandler} />
            </label>
            <label htmlFor="message">
                <div>메일 내용</div>
                <textarea
                    id="message"
                    name="yourmessage"
                    required
                    onChange={messageHandler} />
            </label>
            <div className="btn-box">
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}

// export async function getServerSideProps({ }) {
//     const _form = {

//     }
//     const result = await axios.post("http://localhost:3000/api/mailer");
//     console.log(result)
// }