"""
전체 행성을 loop 돌면서 각 행성마다 간선을 임의로 생성해준다.
이 때, 간선은 x, y, z 좌표를 비교하면서 거리가 가장 짧은 것으로 한다. 

이후, 최소 신장 트리 알고리즘을 활용해서 이어준다.

11 -15 -15
14 -5 -15
-1 -1 -5
10 -4 -1
19 -4 19

"""

from itertools import combinations, permutations


def find_parent(parent, x):
  if parent[x] != x:
    parent[x] = find_parent(parent, parent[x])
  
  return parent[x]

def union_parent(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)

  if a < b:
    parent[b] = a
  else:
    parent[a] = b

n = int(input())
parent = [0] * (n + 1)
planets = []

for i in range(1, n + 1):
  parent[i] = i

for i in range(1, n+1):
  x, y, z = map(int, input().split())
  planets.append((x, y, z, i))

edges = []

for i in list(combinations(planets, 2)):
  a, b = i
  x1, y1, z1, n1 = a
  x2, y2, z2, n2 = b

  x = abs(x1 - x2)
  y = abs(y1 - y2)
  z = abs(z1 - z2)

  edges.append((min(x, y, z), n1+1, n2+1))

print(edges)
edges.sort()
result = 0
cycle = 0

for edge in edges:
  print(edge)
  cost, a, b = edge
  if find_parent(parent, a) != find_parent(parent, b):
    union_parent(parent, a, b)
    cycle += 1
    result += cost

  if cycle == n-1:
    break

print(result)

