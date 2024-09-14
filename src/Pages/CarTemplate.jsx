import React, { useState } from 'react';
import './CSS/CarTemplate.css';

const CarTemplate = ({ id, name,  images, categories, ...car }) => {
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [largeImage, ...smallImages] = images;
    const placeholderText = `Hi, I'm interested in your ${name} listed for sale on VintageWheels.com for $${car.price}.`;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

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
                            src={largeImage}
                            alt={`${car.name} large`}
                            onClick={() => handleImageClick(largeImage)}
                        />
                    )}

                    {smallImages.length > 0 && (
                        <div className="small-images">
                            {smallImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
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
                            !['images', 'categories'].includes(key) && (
                                <tr key={index}>
                                    <td className="property-key">
                                        {key === "exterior_color" ? "Exterior color" :
                                            key === "interior_color" ? "Interior color" :
                                                key === "engine_size" ? "Engine Size" :
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
                        <input placeholder="First Name" type="text" id="first-name" name="first_name" required />
                        <input placeholder="Last Name" type="text" id="last-name" name="last_name" required />
                        <input placeholder="Email" type="email" id="email" name="email" required />
                        <input placeholder="Phone" type="tel" id="phone" name="phone" required />

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

                        <label>
                            <input type="checkbox" name="newsletter" />
                            Sign me up for the Newsletter
                        </label>
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={modalImage} alt="Full screen view" />
                </div>
            )}
        </div>
    );
};

export default CarTemplate;
