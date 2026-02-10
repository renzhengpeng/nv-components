/**
 * 创建带源代码显示的 Story
 * @param render render 函数
 * @param source 源代码字符串
 * @param args 可选的 args
 * @param language 可选的语言类型 (html, javascript, typescript)
 * @returns Story 对象
 */
export function storyWithSource(
  render: Function,
  source: string,
  args?: any,
  language?: string
) {
  const story: any = { render };
  
  if (args) {
    story.args = args;
  }
  
  story.parameters = {
    docs: {
      source: {
        code: source,
        language: language || 'html'
      }
    }
  };
  
  return story;
}

/**
 * 从 HTML 模板字符串中提取代码（移除多余的缩进）
 * @param strings 模板字符串
 * @param values 插值
 * @returns 格式化的代码字符串
 */
export function sourceCode(strings: TemplateStringsArray, ...values: any[]): string {
  let result = '';
  
  strings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += String(values[i]);
    }
  });
  
  // 移除首尾空行
  result = result.trim();
  
  // 找到最小的缩进量并移除
  const lines = result.split('\n');
  const minIndent = lines
    .filter(line => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^(\s*)/)?.[1].length || 0;
      return Math.min(min, indent);
    }, Infinity);
  
  if (minIndent < Infinity && minIndent > 0) {
    result = lines
      .map(line => line.substring(minIndent))
      .join('\n');
  }
  
  return result;
}

