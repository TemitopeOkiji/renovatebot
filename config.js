module.exports = {
    token: Process.env.RENOVATE_TOKEN,
    username: "cdc-coe-botfrey[bot]",
    gitAuthor: "Self-hosted Renovate Bot <123456+cdc-coe-botfrey[bot]@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: {
        extends: ['config:base',':rebaseStalePrs'],
    },
    labels: ["renovatebot"],
    // schedule: ["every weekend"],
    packageRules: [
        
        {
            matchUpdateTypes: ["minor", "patch", "pin","lockFileMaintenance"],
            automerge: true

        },
        
        {
            matchPackageNames: ["hashicorp/terraform"],
            groupName: "terraform",
        }
    ],
    // Managers https://docs.renovatebot.com/modules/manager/#enabling-and-disabling-managers
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        
    },
    updateLockFiles: true,
    
    repositories: ['bertrandmbanwi/renovatebot'],
}