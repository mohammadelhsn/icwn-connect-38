const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-beige-50" aria-live="polite" aria-busy="true">
            <div className="w-16 h-16 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 font-heading text-xl text-ink-700 tracking-wider">
                Loading...
            </p>
        </div>
    );
};

export default LoadingPage;

