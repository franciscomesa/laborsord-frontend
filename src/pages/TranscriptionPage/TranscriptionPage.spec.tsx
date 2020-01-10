import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TranscriptionPage } from './TranscriptionPage';
import { AudioService } from '../../services/AudioService';

describe('TranscriptionPage', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <TranscriptionPage teacherService={new AudioService()}/>,
    );
    expect(renderResult.queryByText('Hello from TranscriptionPage!')).toBeTruthy();
  });
});
