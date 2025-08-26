import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 to-beige-50 min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Button asChild variant="ghost" className="text-ink-600 hover:text-green-700">
                            <Link to="/">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Main Page
                            </Link>
                        </Button>
                    </div>

                    <div className="bg-card rounded-card shadow-card border border-beige-200 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
                                About the Islamic Center of West Niagara (ICWN)
                            </h1>
                            <p className="text-lg text-ink-600 mt-4 font-body">
                                Fostering a vibrant, inclusive, and spiritually-enriching community.
                            </p>
                        </div>

                        <div className="prose prose-green max-w-none font-body text-ink-700 text-lg leading-relaxed">
                            <h2 className="font-heading text-2xl font-semibold text-foreground">Our Mission</h2>
                            <p>
                                The Islamic Center of West Niagara (ICWN) is dedicated to serving the religious, educational, and social needs of the Muslim community in the greater Niagara area. We strive to promote a comprehensive Islamic way of life based on the teachings of the Holy Qur'an and the Sunnah of Prophet Muhammad (peace be upon him).
                            </p>

                            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8">Our Vision</h2>
                            <p>
                                Our vision is to be a beacon of Islamic guidance and a center of excellence for the community. We aim to foster a welcoming environment that encourages spiritual growth, intellectual development, and positive civic engagement. We envision a community that is united, compassionate, and actively contributing to the betterment of society at large.
                            </p>

                            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8">Our Values</h2>
                            <ul>
                                <li><strong>Faith (Iman):</strong> Upholding the core tenets of Islam in all our endeavors.</li>
                                <li><strong>Community (Ummah):</strong> Building strong bonds of brotherhood and sisterhood.</li>
                                <li><strong>Knowledge (Ilm):</strong> Promoting continuous learning and understanding of our faith.</li>
                                <li><strong>Service (Khidmah):</strong> Serving the needs of our community and our neighbors with compassion and excellence.</li>
                                <li><strong>Inclusivity:</strong> Welcoming all individuals, regardless of their background or level of practice.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

