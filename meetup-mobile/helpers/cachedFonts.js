/**
 * Created by Ibrahim on 05/05/2017.
 */
import { Font } from 'expo';

export const cachedFonts = fonts =>
    fonts.map(font => Font.loadAsync(font));

