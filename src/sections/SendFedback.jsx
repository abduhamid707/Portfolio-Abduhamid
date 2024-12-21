import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify'; // Make sure to install react-toastify (npm install react-toastify)
import 'react-toastify/dist/ReactToastify.css';

const FedBack = () => {
    const [formData, setFormData] = useState({ name: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Mock API call
            const response = await fetch('/api/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                toast.success('Your feedback has been submitted successfully!');
            } else {
                toast.error('There was an error submitting your feedback.');
            }
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setIsSubmitting(false);
            setFormData({ name: '', text: '' }); // Clear form after submission
        }
    };

    return (
<section className="FedBack mt-24">
    <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">{t("feedbackText")}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-left text-accent font-semibold">{t("name")}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("placeholderName")}
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-left text-accent font-semibold">{t("email")}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("placeholderEmail")}
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="text" className="text-left text-accent font-semibold">{t("feedbackText")}</label>
                <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    className="bg-transparent px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("placeholderFeedback")}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-transparent w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                disabled={isSubmitting}
            >
                {isSubmitting ? t("buttonSubmitting") : t("buttonSubmit")}
            </button>
        </form>
    </div>
</section>

    );
};

export default FedBack;
