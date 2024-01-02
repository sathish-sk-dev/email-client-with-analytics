import '@testing-library/jest-dom';
import { ProviderWrapper } from './ProviderWrapper';
import { render } from '../../test-utils/testUtils';
import { screen } from '@testing-library/react';

describe('ProviderWrapper', () => {
  it('should render children', () => {
    const childComponent = <div>Child Component</div>;

    render(<ProviderWrapper>{childComponent}</ProviderWrapper>);

    const text: HTMLElement = screen.getByText('Child Component');

    expect(text).toBeInTheDocument();
  });
});
