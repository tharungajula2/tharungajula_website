import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black py-16">
      {/* Section-specific subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Personal website of Tharun Kumar Gajula, showcasing professional experience, projects, and skills.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com" className="text-gray-400 hover:text-gray-300 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="https://huggingface.co" className="text-gray-400 hover:text-yellow-300 transition-colors">HuggingFace</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900/20 to-transparent mb-8"></div>
        
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tharun Kumar Gajula. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 