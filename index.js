// Pencil Windows UI Designer Agent Entry Point

const PencilWindowsUIDesigner = require('./agent_implementation');

// 创建agent实例
const designerAgent = new PencilWindowsUIDesigner();

// 导出agent实例
module.exports = designerAgent;

// 如果直接运行此文件，则测试agent
if (require.main === module) {
  console.log('=== Pencil Windows UI Designer Agent ===');
  console.log('名称: ' + designerAgent.name);
  console.log('描述: ' + designerAgent.description);
  
  console.log('\n=== 核心技能 ===');
  for (const skillName in designerAgent.skills) {
    const skill = designerAgent.skills[skillName];
    console.log('- ' + skill.description);
    for (const capability of skill.capabilities) {
      console.log('  * ' + capability);
    }
  }
  
  console.log('\n=== 知识库 ===');
  for (const knowledgeName in designerAgent.knowledgeBase) {
    const knowledge = designerAgent.knowledgeBase[knowledgeName];
    console.log('- ' + knowledge.source);
    for (const topic of knowledge.topics) {
      console.log('  * ' + topic);
    }
  }
  
  console.log('\n=== 设计原则 ===');
  for (const principleName in designerAgent.designPrinciples) {
    const principle = designerAgent.designPrinciples[principleName];
    console.log('- ' + principle.description);
    for (const guideline of principle.guidelines) {
      console.log('  * ' + guideline);
    }
  }
  
  console.log('\n=== 测试响应 ===');
  const testRequests = [
    '你好，我需要设计一个类似筑业云资料的Windows桌面应用',
    '如何在Pencil中创建组件库？',
    'Windows桌面应用的设计规范有哪些？'
  ];
  
  async function testResponses() {
    for (const request of testRequests) {
      console.log('\n请求: ' + request);
      const response = await designerAgent.processRequest(request);
      console.log('响应: ' + response.content);
    }
  }
  
  testResponses().catch(console.error);
}