const PageHero = ({ title, description, children }) => {
  return (
    <section
      className={`bg-[url('/images/hero-bg.png')] bg-cover bg-center pt-24 pb-12 sm:pb-16 lg:pb-20`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
