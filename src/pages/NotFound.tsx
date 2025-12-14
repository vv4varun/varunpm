import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-gradient mb-8">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
