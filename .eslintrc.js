module.exports = {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    'react-hooks/rules-of-hooks': ['off'],  // react hook관련 eslint off
    'react-hooks/exhaustive-deps': ['off'],  // useEffect [] 사용하기 위함
  }
}