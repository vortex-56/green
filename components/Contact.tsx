
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
    const { content } = useLanguage();

    // Construir rutas a assets respetando `base` configurado en Vite
    const baseUrl = (import.meta as any).env?.BASE_URL ?? '/';
    const asset = (p: string) => `${baseUrl}${p}`;

    const socialLinksHotel = [
        { name: 'Facebook', href: 'https://www.facebook.com/share/1BJK8o4b9e/?mibextid=wwXIfr', icon: <img src={asset('0L/0L01.webp')} alt="Facebook" className="w-8 h-8" /> },
        { name: 'Instagram', href: 'https://www.instagram.com/greenparadise.hotel?igsh=NWRwcGJ0c3E5azd4', icon: <img src={asset('0L/0L02.webp')} alt="Instagram" className="w-8 h-8" /> },
        { name: 'TikTok', href: 'https://www.tiktok.com/@hotelgreenparadisetm?_t=ZT-8zA0jXHRL1a&_r=1', icon: <img src={asset('0L/0L03.webp')} alt="TikTok" className="w-8 h-8" /> },
    ];

    const socialLinksBungalows = [
        { name: 'Facebook', href: 'https://www.facebook.com/share/1CCzat4AN7/?mibextid=wwXIfr', icon: <img src={asset('0L/0L01.webp')} alt="Facebook" className="w-8 h-8" /> },
        { name: 'Instagram', href: 'https://www.instagram.com/greenparadise.bungalows?igsh=MTM0MXJhYTcyaGx5eA==', icon: <img src={asset('0L/0L02.webp')} alt="Instagram" className="w-8 h-8" /> },
        { name: 'TikTok', href: 'https://www.tiktok.com/@greenparadisebungalowstm?_t=ZT-8zA0hEW2kI9&_r=1', icon: <img src={asset('0L/0L03.webp')} alt="TikTok" className="w-8 h-8" /> },
    ];

    return (
        <section id="contacto" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                        {content.contactTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Hotel Info */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.contactHotelAddress}</h3>
                        <p className="text-gray-600 mb-4">Raymondi, Rupa Rupa 10131</p>
                        <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.373292437525!2d-76.004245!3d-9.293421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6104085429875%3A0x8e8a715de35c8e3!2sRaymondi%2C%20Rupa%20Rupa%2010131!5e0!3m2!1sen!2spe!4v1678886655444!5m2!1sen!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* Número y redes para Hotel */}
                        <div className="mt-4 text-left">
                            <p className="text-sm font-semibold text-gray-700 mb-1">WhatsApp:</p>
                            <p className="text-lg font-semibold text-green-800 mb-2">+51 993 294 249</p>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Redes Sociales:</p>
                            <div className="flex justify-start space-x-4">
                                {socialLinksHotel.map(link => (
                                    <a key={`hotel-${link.name}`} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                                        <span className="sr-only">{link.name}</span>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bungalows Info */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.contactBungalowAddress}</h3>
                        <p className="text-gray-600 mb-4">J26F+JR, Las Palmas 10120</p>
                        <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5566.8919312230055!2d-75.98209679901383!3d-9.38738751206924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a645621b3f0a29%3A0x238ca5e7b9abae4e!2sGreen%20Paradise%20bungalows!5e0!3m2!1ses-419!2spe!4v1755990208863!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                           ></iframe>
                        </div>
                        {/* Número y redes para Bungalows */}
                        <div className="mt-4 text-left">
                            <p className="text-sm font-semibold text-gray-700 mb-1">WhatsApp:</p>
                            <p className="text-lg font-semibold text-green-800 mb-2">+51 979 309 553</p>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Redes Sociales:</p>
                            <div className="flex justify-start space-x-4">
                                {socialLinksBungalows.map(link => (
                                    <a key={`bungalow-${link.name}`} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                                        <span className="sr-only">{link.name}</span>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Se eliminó la sección central "Síguenos" porque cada mapa ahora muestra su número y redes sociales debajo */}
            </div>
        </section>
    );
};

export default Contact;