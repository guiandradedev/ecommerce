export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo e Descrição */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2">
                            <div className="bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🔥</span>
                            </div>
                            <span className="text-white font-semibold text-lg">E-commerce</span>
                        </div>
                        <p className="mt-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae molestiae illo odit eaque amet voluptatum? Earum natus eos laudantium. Soluta nobis tenetur quasi laborum debitis praesentium nulla consequatur dicta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Facebook</span>
                                
                            </a>
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Instagram</span>
                                
                            </a>
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">Twitter</span>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}