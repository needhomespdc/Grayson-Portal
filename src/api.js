const base = import.meta.env.VITE_API_BASE_URL
const useMocks = import.meta.env.VITE_USE_MOCK_DATA !== 'false' || !base

async function request(path, options={}) {
  const response = await fetch(`${base}${path}`, {headers:{'Content-Type':'application/json',...options.headers},...options})
  if (!response.ok) throw new Error((await response.json().catch(()=>null))?.message || 'Request failed')
  return response.json()
}

export const api = {
  isMock: useMocks,
  login: body => useMocks ? Promise.resolve({token:'demo-token',user:{name:'Adenuga'}}) : request('/auth/login',{method:'POST',body:JSON.stringify(body)}),
  approveRequest: id => useMocks ? Promise.resolve({id,status:'Approved'}) : request(`/fund-requests/${id}/approve`,{method:'POST'}),
  rejectRequest: (id,reason) => useMocks ? Promise.resolve({id,status:'Rejected',reason}) : request(`/fund-requests/${id}/reject`,{method:'POST',body:JSON.stringify({reason})}),
}
