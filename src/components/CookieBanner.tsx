import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X, Cookie } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('alfa-cookies-accepted');
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('alfa-cookies-accepted', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('alfa-cookies-accepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Cookie className="text-[#FF0000] shrink-0" size={24} />
          <div className="text-sm">
            <p className="text-gray-700">
              We use cookies to enhance your experience and analyze our website traffic. 
              By continuing to browse, you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-gray-600 border-gray-300"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-[#FF0000] hover:bg-red-700 text-white"
          >
            Accept
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="p-1"
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}