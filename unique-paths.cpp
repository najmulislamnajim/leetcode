//cpp
const int N=101;
int dp[N][N];

int solve(int m,int n)
{
    //base case
    if(m==0 && n==0)return 1;
    //check if already calculated
    if(dp[m][n]!=-1)return dp[m][n];
    //solve smaller problems
    int ans=0;
    if(m>0)ans+=solve(m-1,n);
    if(n>0)ans+=solve(m,n-1);
    dp[m][n]=ans;
    return ans;
}

class Solution {
public:
    int uniquePaths(int m, int n) {
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                dp[i][j]=-1;
            }
        }

        return solve(m-1,n-1);
    }
};
