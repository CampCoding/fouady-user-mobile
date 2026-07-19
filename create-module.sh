#!/bin/bash

MODULE_NAME=$1

if [ -z "$MODULE_NAME" ]; then
  echo "Usage: ./create-module.sh home"
  exit 1
fi

# Convert first letter to uppercase
PASCAL_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${MODULE_NAME:0:1})${MODULE_NAME:1}"

BASE_PATH="src/screens/$MODULE_NAME"

mkdir -p "$BASE_PATH/components"
mkdir -p "$BASE_PATH/hooks"
mkdir -p "$BASE_PATH/services"

##########################################
# ${PASCAL_NAME}Screen.tsx
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.tsx"
import React from 'react';
import ${PASCAL_NAME}ScreenUI from './${PASCAL_NAME}Screen_UI';
import use${PASCAL_NAME}Screen from './${PASCAL_NAME}Screen.hooks';

const ${PASCAL_NAME}Screen = () => {
  const {} = use${PASCAL_NAME}Screen();
  return <${PASCAL_NAME}ScreenUI />;
};

export default ${PASCAL_NAME}Screen;
EOF

##########################################
# ${PASCAL_NAME}Screen_UI.tsx
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen_UI.tsx"
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './${PASCAL_NAME}Screen.styles';
import { ${PASCAL_NAME}ScreenProps } from './${PASCAL_NAME}Screen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const ${PASCAL_NAME}ScreenUI = (props: ${PASCAL_NAME}ScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>${PASCAL_NAME} Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ${PASCAL_NAME}ScreenUI;
EOF

##########################################
# ${PASCAL_NAME}Screen.styles.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.styles.ts"
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
EOF

##########################################
# ${PASCAL_NAME}Screen.types.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.types.ts"
export interface ${PASCAL_NAME}ScreenProps {}
EOF

##########################################
# ${PASCAL_NAME}Screen.hooks.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.hooks.ts"
const use${PASCAL_NAME}Screen = () => {
  return {};
};

export default use${PASCAL_NAME}Screen;
EOF

##########################################
# index.ts
##########################################

cat <<EOF > "$BASE_PATH/index.ts"
export { default } from './${PASCAL_NAME}Screen';
EOF

chmod +x "$BASE_PATH" -R 2>/dev/null || true

echo "✅ Module '$MODULE_NAME' created successfully!"