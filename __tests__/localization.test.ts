import { I18nManager } from 'react-native';
import { setLanguageDirection } from '../src/localization';

describe('localization direction', () => {
  it('enables RTL for Arabic and disables it for English', () => {
    const forceRTLSpy = jest.spyOn(I18nManager, 'forceRTL');

    setLanguageDirection('ar');
    expect(forceRTLSpy).toHaveBeenCalledWith(true);

    setLanguageDirection('en');
    expect(forceRTLSpy).toHaveBeenCalledWith(false);

    forceRTLSpy.mockRestore();
  });
});
