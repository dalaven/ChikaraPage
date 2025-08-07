import { useOutletContext } from 'react-router-dom';

const TermsContent = ({ children }) => {
  const { version } = useOutletContext();

  return (
    <div className="prose dark:prose-invert max-w-none space-y-6">
      <p className="text-sm text-right text-gray-500 dark:text-gray-400">
        Última actualización: {version}
      </p>
      {children}
    </div>
  );
};

export default TermsContent;
