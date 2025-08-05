import Link from 'next/link';
import Button from '@/src/ui/components/Button';

export default function HomePage() {
  return (
    <div className="u-container u-padding--xl">
      <div className="u-text--center u-margin-bottom--xl">
        <h1 className="u-text--4xl u-text--bold u-margin-bottom--lg">
          Simple Dashboard
        </h1>
        <p className="u-text--lg u-text--secondary u-margin-bottom--xl">
          Welcome to your dashboard application with improved button styles
        </p>
        
        <div className="card u-margin-bottom--xl">
          <div className="card__body">
            <h2 className="u-text--xl u-text--semibold u-margin-bottom--md">
              Button Showcase
            </h2>
            <p className="u-text--secondary u-margin-bottom--lg">
              Check out the improved button styles with better padding and visual appeal.
            </p>
            
            {/* Button Sizes */}
            <div className="u-margin-bottom--lg">
              <h3 className="u-text--lg u-text--semibold u-margin-bottom--md">Button Sizes</h3>
              <div className="u-flex u-flex--wrap" style={{ gap: 'var(--spacing-md)', alignItems: 'center' }}>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="xl">Extra Large</Button>
              </div>
            </div>
            
            {/* Button Variants */}
            <div className="u-margin-bottom--lg">
              <h3 className="u-text--lg u-text--semibold u-margin-bottom--md">Button Variants</h3>
              <div className="u-flex u-flex--wrap" style={{ gap: 'var(--spacing-md)', alignItems: 'center' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>
            
            {/* Full Width Button */}
            <div className="u-margin-bottom--lg">
              <h3 className="u-text--lg u-text--semibold u-margin-bottom--md">Full Width</h3>
              <Button variant="primary" size="full">Full Width Button</Button>
            </div>
            
            {/* Login Button */}
            <div>
              <h3 className="u-text--lg u-text--semibold u-margin-bottom--md">Try the Login Form</h3>
              <Link href="/login">
                <Button variant="primary" size="lg">
                  Go to Login Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}