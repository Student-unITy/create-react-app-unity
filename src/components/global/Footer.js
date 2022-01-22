import React from 'react';

const Footer = () => {
  return (
      //make footer with tailwindcss
        <footer className="bg-gray-800 text-white p-4 text-center"> 
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">    
                    <div className="flex flex-col md:flex-row items-center">
                        <p className="text-white text-sm">
                            &copy; {new Date().getFullYear()} unITy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;