import React, {useState} from 'react';
import './CSS/CarTemplate.css';
import carImages from '../Components/Assets/images/carImages'

const getImageFromDbString = (imageName) => {
    return carImages[imageName] || null;
};

const CarTemplate = ({id, name, images, ownerMail, categories, ...car}) => {
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [largeImage, ...smallImages] = images;
    const placeholderText = `Hi, I'm interested in your ${name} listed for sale on VintageWheels.com for $${car.price}.`;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const validateForm = () => {
        if (!firstName.trim()) {
            alert("First name is required.");
            return false;
        }
        if (!lastName.trim()) {
            alert("Last name is required.");
            return false;
        }
        if (!email.trim()) {
            alert("Email is required.");
            return false;
        }
        if (!phone.trim()) {
            alert("Phone number is required.");
            return false;
        }
        if (!message.trim()) {
            alert("Message is required.");
            return false;
        }
        return true;
    };


    const handleFormSubmit = () => {
        if (!validateForm()) {
            return;
        }

        fetch("http://localhost:8080/contact-seller", {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
                recipientEmail: ownerMail
            }),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(response => {
                    return response.toString();
                }
            )
            .then(data => {
                console.log("Response from server:", data);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setCharCount(0);
                alert("Message sent successfully!")
            })
            .catch(error => {
                console.error("Error sending message:", error);
                alert("An error occurred while sending the message.");
            });
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setCharCount(e.target.value.length);
    };

    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    return (
        <div className="car-template">
            <h1>{name}</h1>

            <div className="car-information">
                <div className="car-images">

                    {largeImage && (
                        <img
                            className="large-image"
                            src={getImageFromDbString(largeImage)}
                            alt={`${car.name} large`}
                            onClick={() => handleImageClick(largeImage)}
                        />
                    )}

                    {smallImages.length > 0 && (
                        <div className="small-images">
                            {smallImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={getImageFromDbString(image)}
                                    alt={`${car.name} small ${index + 1}`}
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="properties">
                    <table>
                        <tbody>
                        {Object.entries(car).map(([key, value], index) => (
                            value !== null && !['images', 'categories', 'ownerMail'].includes(key) && (
                                <tr key={index}>
                                    <td className="property-key">
                                        {key === "exteriorColor" ? "Exterior color" :
                                            key === "interiorColor" ? "Interior color" :
                                                key === "engineSize" ? "Engine Size" :
                                                    key}
                                    </td>
                                    <td className="property-value">
                                        {key === "price" ? `$${value}` : Array.isArray(value) ? value.join(', ') : value.toString()}
                                    </td>
                                </tr>
                            )
                        ))}

                        </tbody>
                    </table>

                    <div className="contact-seller">
                        <h2>Contact Seller</h2>
                        <input placeholder="First Name"
                               type="text"
                               id="first-name"
                               name="first_name"
                               required
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            placeholder="Last Name"
                            type="text"
                            id="last-name"
                            name="last_name"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Phone"
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            maxLength="500"
                            placeholder={placeholderText}
                            value={message}
                            onChange={handleMessageChange}
                            required
                        ></textarea>

                        <span className="char-count">{charCount}/500</span>
                        <button type="submit" onClick={handleFormSubmit}>Send Message</button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={getImageFromDbString(modalImage)} alt="Full screen view"/>
                </div>
            )}
        </div>
    );
};

export default CarTemplate;
