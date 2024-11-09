const PageWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div className="max-w-6xl m-auto px-4">
            {children}
        </div>
    );
}

export default PageWrapper;