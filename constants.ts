
export const HIRAGANA_DIGITS: string[] = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'];
export const OPERATORS: string[] = ['+', '-', '*', '/'];

export const HIRAGANA_TO_NUMBER_MAP: Record<string, string> = {
  'わ': '0', 'あ': '1', 'か': '2', 'さ': '3', 'た': '4',
  'な': '5', 'は': '6', 'ま': '7', 'や': '8', 'ら': '9'
};

export const NUMBER_TO_HIRAGANA_MAP: Record<string, string> = {
  '0': 'わ', '1': 'あ', '2': 'か', '3': 'さ', '4': 'た',
  '5': 'な', '6': 'は', '7': 'ま', '8': 'や', '9': 'ら'
};

export const BUTTON_LAYOUT: string[][] = [
  ['ま', 'や', 'ら', '/'],
  ['た', 'な', 'は', '*'],
  ['あ', 'か', 'さ', '-'],
  ['わ', 'C', '=', '+']
];
