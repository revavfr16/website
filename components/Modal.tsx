import { useEffect } from 'react';

export default function Modal({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/jsform/242674238119056';
      script.async = true;
      document.getElementById('jotform-container')?.appendChild(script);

      return () => {
        const container = document.getElementById('jotform-container');
        if (container) {
          container.innerHTML = '';
        }
      };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <div id="jotform-container" />
      </div>
    </div>
  );
}