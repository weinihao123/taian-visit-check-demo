const SCENES = [
  { id: 'first', number: '01', title: '首次拜访', description: '了解客户 · 建立对接' },
  { id: 'routine', number: '02', title: '日常回访', description: '跟进合作 · 查看变化' },
  { id: 'service', number: '03', title: '服务问题', description: '核实问题 · 推动处理' },
  { id: 'project', number: '04', title: '项目推进', description: '确认障碍 · 安排下一步' }
];

const STAGES = [
  { id: 'pre', title: '访前准备', short: '访前', description: '出发之前，把目标、人员、历史事项和资料准备清楚。' },
  { id: 'during', title: '现场执行', short: '访中', description: '在客户现场，按议题沟通、准确记录并确认下一步。' },
  { id: 'post', title: '访后闭环', short: '访后', description: '把现场约定转成任务，向客户和内部相关人员反馈。' }
];

const ACTIONS = [
  { id:'pre_goal',stage:'pre',group:'common',key:true,title:'明确本次主要任务和目标',criteria:'能说清为什么去、见谁、希望客户确认或推动什么；写明主要目标与底线目标。' },
  { id:'pre_history',stage:'pre',group:'common',key:true,title:'核对历史沟通与未结承诺',criteria:'查清上次事项、当前进展、责任人及本次可向客户说明的口径。' },
  { id:'pre_people',stage:'pre',group:'common',key:true,title:'确认双方人员、时间和议题',criteria:'已与客户确认地点、时长、出席人员和交流议题；我方参加人员也已确认。' },
  { id:'pre_roles',stage:'pre',group:'common',key:false,title:'统一我方分工和应答边界',criteria:'谁开场、谁回答专业问题、谁记录已明确；需带回核实的事项已有反馈安排。' },
  { id:'pre_materials',stage:'pre',group:'common',key:false,title:'检查材料、设备和行程',criteria:'与议题相关的资料已更新；演示设备可用，交通时间和入场安排已核实。' },
  { id:'during_arrive',stage:'during',group:'common',key:false,title:'按约到访并做好现场礼仪',criteria:'守时、着装得体、手机静音，按客户单位要求进场和接受接待安排。' },
  { id:'during_open',stage:'during',group:'common',key:true,title:'介绍人员、来意并确认议程',criteria:'双方知道参加人员、此次来意、预计交流时间和优先讨论事项。' },
  { id:'during_listen',stage:'during',group:'common',key:false,title:'听取客户情况并准确记录',criteria:'记录客户事实、要求与双方表态；对不清楚的信息追问或复述确认。' },
  { id:'during_close',stage:'during',group:'common',key:true,title:'离场前确认共识和下一步',criteria:'已说明双方各做什么、由谁对接、何时反馈；未获客户确认的事项单独记为待协调。' },
  { id:'post_minutes',stage:'post',group:'common',key:true,title:'整理拜访纪要和行动事项',criteria:'把事实、客户要求、双方共识、我方承诺与待核实事项分开记录。' },
  { id:'post_owner',stage:'post',group:'common',key:true,title:'为每项待办指定责任人和时间',criteria:'每个事项都有负责人、需要的支撑、下一次反馈时间和完成标准。' },
  { id:'post_sync',stage:'post',group:'common',key:false,title:'同步重要信息并更新客户记录',criteria:'跨部门事项已交接；客户信息和商机变化按现行系统要求更新。' },
  { id:'post_feedback',stage:'post',group:'common',key:true,title:'按约向客户反馈进展',criteria:'客户收到真实进展、未结原因及下一步安排；延期时已提前说明。' },
  { id:'post_close',stage:'post',group:'common',key:false,title:'确认结果并完成复盘',criteria:'客户已知处理结果；未结事项继续跟进，改进点已记录。' },

  { id:'first_background',stage:'pre',group:'scene',scenes:['first'],key:true,title:'了解客户基本情况与拜访对象',criteria:'掌握客户主营业务、近期工作、参会人员职责；未知信息标为现场待核实。' },
  { id:'first_open',stage:'during',group:'scene',scenes:['first'],key:false,title:'说明联系背景并先了解客户',criteria:'介绍我方角色和本次来意，询问客户当前工作及希望获得的支持。' },
  { id:'first_next',stage:'post',group:'scene',scenes:['first'],key:false,title:'建立后续对接记录',criteria:'记录客户主要联系人、适合继续沟通的议题及已确认的后续联系安排。' },

  { id:'routine_usage',stage:'pre',group:'scene',scenes:['routine'],key:false,title:'查看在用业务和近期变化',criteria:'核对相关业务、合同或服务状态，准备本次需要回访的问题。' },
  { id:'routine_review',stage:'during',group:'scene',scenes:['routine'],key:false,title:'回顾合作并询问使用反馈',criteria:'请客户确认现有服务使用情况、历史事项进展和近期变化。' },
  { id:'routine_update',stage:'post',group:'scene',scenes:['routine'],key:false,title:'更新客户关系与服务信息',criteria:'将已确认的人员、业务和服务变化写入现有客户记录。' },

  { id:'service_progress',stage:'pre',group:'scene',scenes:['service'],key:true,title:'查清问题受理与处理进度',criteria:'已与责任部门核对影响范围、已做工作、未结原因和可反馈的下一步。' },
  { id:'service_confirm',stage:'during',group:'scene',scenes:['service'],key:true,title:'先核实问题，再说明处理安排',criteria:'与客户确认问题范围和影响，说明已核实的进度、需客户配合事项和后续反馈。' },
  { id:'service_result',stage:'post',group:'scene',scenes:['service'],key:true,title:'跟踪处理结果与客户确认',criteria:'跟进排查或处理结果并向客户解释；仍未解决的部分保留持续跟进任务。' },

  { id:'project_state',stage:'pre',group:'scene',scenes:['project'],key:true,title:'梳理项目进展与当前障碍',criteria:'明确已完成事项、待决问题、相关人员及本次希望推动的节点。' },
  { id:'project_decision',stage:'during',group:'scene',scenes:['project'],key:false,title:'核实项目状态与推进条件',criteria:'与客户确认问题、相关部门、时机和需要双方配合的事项。' },
  { id:'project_action',stage:'post',group:'scene',scenes:['project'],key:true,title:'落实项目下一阶段行动',criteria:'方案、调研、试点或再次沟通等事项已明确双方对接人与时间。' },

  { id:'leader_request',stage:'pre',group:'leader',key:true,title:'说清为什么需要领导陪访',criteria:'已向领导说明拜访对象、此次目标、需要领导推动的具体事项及拟定安排。' },
  { id:'leader_brief',stage:'pre',group:'leader',key:true,title:'准备一页领导简报和详细谈参',criteria:'简报含客户速览、合作现状、目标、商请事项、承诺边界与人员分工。' },
  { id:'leader_rehearsal',stage:'pre',group:'leader',key:true,title:'完成访前汇报并确认分工',criteria:'领导清楚见谁、为何去、客户可能先问什么、由谁补充及哪些事项需带回核实。' },
  { id:'leader_support',stage:'during',group:'leader',key:false,title:'按分工补充事实、衔接专业应答',criteria:'客户经理及时补充合作事实，技术或产品问题由相应人员接续回答。' },
  { id:'leader_promise',stage:'during',group:'leader',key:true,title:'准确记录领导与客户双方表态',criteria:'原则性意见与具体承诺分开记录，重要事项在结束前复述确认。' },
  { id:'leader_report',stage:'post',group:'leader',key:true,title:'向陪访领导报告结果与后续计划',criteria:'对照访前目标说明达成情况、客户反馈、责任分工及需领导协调的事项。' },
  { id:'leader_follow',stage:'post',group:'leader',key:false,title:'反馈领导关注事项的办理进展',criteria:'相关部门已接手，重要进展和阻碍按约定向领导及客户反馈。' }
];

const STORAGE_KEY = 'taian-visit-demo-v1';
const defaultState = { scene:'routine', leader:false, stage:'pre', statuses:{} };
let state = loadState();
let printMode = false;

function loadState(){
  try {
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved && SCENES.some(s=>s.id===saved.scene) && STAGES.some(s=>s.id===saved.stage)){
      return {scene:saved.scene,leader:!!saved.leader,stage:saved.stage,statuses:saved.statuses && typeof saved.statuses==='object'?saved.statuses:{}};
    }
  } catch (_) {}
  return structuredClone(defaultState);
}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_) {}}
function visibleActions(stage){return ACTIONS.filter(a=>a.stage===stage && (a.group==='common'||(a.group==='scene'&&a.scenes.includes(state.scene))||(a.group==='leader'&&state.leader)));}
function allVisible(){return STAGES.flatMap(s=>visibleActions(s.id));}
function getStatus(id){return ['done','pending','na'].includes(state.statuses[id])?state.statuses[id]:'unreviewed';}
function stageStats(id){const list=visibleActions(id);const applicable=list.filter(a=>getStatus(a.id)!=='na');const done=applicable.filter(a=>getStatus(a.id)==='done').length;return {done,total:applicable.length};}

function renderScenes(){
  document.getElementById('sceneGrid').innerHTML=SCENES.map(s=>`<button type="button" class="scene-card" data-scene="${s.id}" aria-pressed="${state.scene===s.id}"><span class="scene-top"><span class="scene-number">${s.number} / SCENE</span><span class="scene-check" aria-hidden="true">✓</span></span><span class="scene-title">${s.title}</span><span class="scene-desc">${s.description}</span></button>`).join('');
  document.getElementById('leaderSwitch').setAttribute('aria-checked',String(state.leader));
}
function renderDashboard(){
  const actions=allVisible();
  const applicable=actions.filter(a=>getStatus(a.id)!=='na');
  const done=applicable.filter(a=>getStatus(a.id)==='done').length;
  const percent=applicable.length?Math.round(done/applicable.length*100):0;
  document.getElementById('overallPercent').textContent=`${percent}%`;
  document.getElementById('overallRatio').textContent=`${done} / ${applicable.length} 项已完成`;
  document.getElementById('overallBar').style.width=`${percent}%`;
  document.getElementById('criticalCount').textContent=visibleActions('pre').filter(a=>a.key&&getStatus(a.id)!=='done').length;
  document.getElementById('pendingCount').textContent=actions.filter(a=>getStatus(a.id)==='pending').length;
}
function renderTabs(){
  document.getElementById('stageTabs').innerHTML=STAGES.map((s,i)=>{const x=stageStats(s.id);return `<button type="button" class="stage-tab" data-stage="${s.id}" ${state.stage===s.id?'aria-current="step"':''}><span>${String(i+1).padStart(2,'0')} · ${s.short}</span><span class="tab-count">${x.done}/${x.total}</span></button>`;}).join('');
}
function actionCard(a){
  const current=getStatus(a.id);
  const buttons=[['done','已完成'],['pending','待完成'],['na','不适用']].map(([value,label])=>`<button type="button" class="status-button" data-action="${a.id}" data-value="${value}" aria-pressed="${current===value}" ${a.key&&value==='na'?'disabled title="关键动作不能标记为不适用"':''}>${label}</button>`).join('');
  return `<article class="action-card" data-status="${current}"><div class="action-top"><span class="action-symbol" aria-hidden="true">${current==='done'?'✓':current==='pending'?'!':'○'}</span><div class="action-copy"><div class="action-titleline"><span class="action-title">${a.title}</span>${a.key?'<span class="key-tag">关键项</span>':''}</div><p class="action-criteria">完成判定：${a.criteria}</p></div></div><div class="action-controls" role="group" aria-label="${a.title}的完成状态">${buttons}</div></article>`;
}
function stageContent(stageId){
  const groups=[['common','每次拜访都要做'],['scene',`${SCENES.find(s=>s.id===state.scene).title} · 场景动作`],['leader','领导陪访 · 补充动作']];
  return groups.map(([id,title])=>{const items=visibleActions(stageId).filter(a=>a.group===id);return items.length?`<div class="group-heading"><span>${title}</span></div>${items.map(actionCard).join('')}`:'';}).join('');
}
function renderActions(){
  const stage=STAGES.find(s=>s.id===state.stage);
  const stageIndex=STAGES.findIndex(s=>s.id===state.stage);
  const intro=document.getElementById('stageIntro');
  const list=document.getElementById('actionList');
  if(printMode){
    intro.innerHTML='<span class="intro-kicker">本次动作核对清单</span><h3>访前 · 访中 · 访后</h3>';
    list.innerHTML=STAGES.map(s=>`<section class="print-all-stage"><h3>${s.title}</h3>${stageContent(s.id)}</section>`).join('');
  }else{
    intro.innerHTML=`<span class="intro-kicker">阶段 ${String(stageIndex+1).padStart(2,'0')} / 03</span><h3>${stage.title}</h3><p>${stage.description}</p>`;
    list.innerHTML=stageContent(stage.id);
  }
  const stats=stageStats(stage.id);
  document.getElementById('stageBottomText').textContent=`本阶段 ${stats.done} / ${stats.total} 项完成 · 点击状态可再次取消`;
  const next=document.getElementById('nextStageButton');
  next.innerHTML=stageIndex<2?`进入${STAGES[stageIndex+1].short} <span aria-hidden="true">→</span>`:'返回访前 <span aria-hidden="true">↺</span>';
}
function renderTodos(){
  const actions=allVisible();
  const pending=actions.filter(a=>getStatus(a.id)==='pending');
  const unreviewedKeys=actions.filter(a=>a.key&&getStatus(a.id)==='unreviewed');
  const list=document.getElementById('todoList');
  if(!pending.length&&!unreviewedKeys.length){list.innerHTML='<div class="todo-empty">目前没有已标记的待办或尚未核对的关键项。继续按阶段检查即可。</div>';return;}
  const labelOf=id=>STAGES.find(s=>s.id===id).short;
  const item=(a,cls)=>`<div class="todo-item ${cls}"><div><strong>${a.title}</strong><small>${labelOf(a.stage)} · ${a.group==='leader'?'领导陪访':a.group==='scene'?'场景动作':'共同动作'}</small></div></div>`;
  let html='';
  if(pending.length)html+=`<div class="todo-group"><div class="todo-group-title">待完成 · ${pending.length} 项</div>${pending.slice(0,5).map(a=>item(a,'')).join('')}${pending.length>5?`<div class="todo-more">另有 ${pending.length-5} 项待完成</div>`:''}</div>`;
  if(unreviewedKeys.length)html+=`<div class="todo-group"><div class="todo-group-title">关键项未核对 · ${unreviewedKeys.length} 项</div>${unreviewedKeys.slice(0,5).map(a=>item(a,'review')).join('')}${unreviewedKeys.length>5?`<div class="todo-more">另有 ${unreviewedKeys.length-5} 项关键项未核对</div>`:''}</div>`;
  list.innerHTML=html;
}
function render(){renderScenes();renderDashboard();renderTabs();renderActions();renderTodos();saveState();}
function setScene(id){if(!SCENES.some(s=>s.id===id))return;state.scene=id;render();}
function setLeader(value){state.leader=value;render();}
function setStage(id){if(!STAGES.some(s=>s.id===id))return;state.stage=id;render();document.getElementById('workTitle').scrollIntoView({behavior:'smooth',block:'start'});}

document.getElementById('sceneGrid').addEventListener('click',e=>{const card=e.target.closest('[data-scene]');if(card)setScene(card.dataset.scene);});
document.getElementById('leaderSwitch').addEventListener('click',()=>setLeader(!state.leader));
document.getElementById('sampleButton').addEventListener('click',()=>{state={scene:'service',leader:true,stage:'pre',statuses:{}};render();document.getElementById('workTitle').scrollIntoView({behavior:'smooth',block:'start'});});
document.getElementById('stageTabs').addEventListener('click',e=>{const tab=e.target.closest('[data-stage]');if(tab)setStage(tab.dataset.stage);});
document.getElementById('actionList').addEventListener('click',e=>{const button=e.target.closest('[data-action][data-value]');if(!button)return;const action=ACTIONS.find(a=>a.id===button.dataset.action);if(!action||action.key&&button.dataset.value==='na')return;const current=getStatus(action.id);if(current===button.dataset.value)delete state.statuses[action.id];else state.statuses[action.id]=button.dataset.value;render();});
document.getElementById('nextStageButton').addEventListener('click',()=>{const index=STAGES.findIndex(s=>s.id===state.stage);setStage(STAGES[(index+1)%STAGES.length].id);});
document.getElementById('resetButton').addEventListener('click',()=>{if(!window.confirm('重置本次记录中的所有核对状态？'))return;state={scene:'routine',leader:false,stage:'pre',statuses:{}};render();});
document.getElementById('printButton').addEventListener('click',()=>{printMode=true;renderActions();window.print();});
window.addEventListener('afterprint',()=>{printMode=false;renderActions();});
render();
