interface UserProfile {
    id: string;
    email: string;
    password: string;
    name: string;
    financialGoal: string;
    preferresdCurrency: string;
}

class UserManager {
    private users: UserProfile[];

    constructor(){
        this.users =[];
    }
    registerUser(user: UserProfile): void{
        //implement registered logics
    }

    logicUser(email: string, password: string): UserProfile |null {
        //implement logiclogic
        return null;
    }

    getUserProfile(id: string): UserProfile |null {
        return null;
    }
}


//explore Tracking

interface Expense {
    id: string;
    amount: number;
    category: string;
    date: Date;
    paymentMethod: string;
    notes: string;
}

class ExpenseTracker {
    private expenses: Expense[];

    constructor(){
        this.expenses =[];
    }

    addExpense(expense: Expense): void{
        this.expenses.push(expense);
    }

    getExpenses(): Expense[]{
        return this.expenses;
    }

    addRecurringExpense(expense: Expense, frequency: string): void{
        //implement
    }
}

//income tracking

interface Income {
    id: string;
    amount: number;
    category: string;
    date: Date;
    notes: string;
}

class IncomeTracker {
    private incomes: Income[];

    constructor(){
        this.incomes =[];
    }

    addIncome(income: Income): void {
        this.incomes.push(income);
    }

    getIncome(): Income[]{
        return this.incomes;
    }

    addRecurringIncomes(income: Income, frequency: string): void{
        //implement
    }
}

//Budget Managemnet
interface Budget{
    id: string;
    category: string;
    amount: number;
    frequency: string;
}

class BudgetManager {
    private budgets: Budget[];

     constructor(){
        this.budgets =[];
     }
     setBudget(budget: Budget): void {
        this.budgets.push(budget);
     }

     getBudget(): Budget[]{
        return this.budgets;
     }

     checkBudgetLimits(): void{
        //implement budget limit checking logic
     }
}

//Financial reports and Analytics
class ReportGenerator{
    generateExpenseReport(): string{
        //implement expenses
        return"";
    }

    generateIncomeReport(): string {
         return"";
    }

    generateGraphisAndcharts(): void {
        //implements
    }

    exportData(format: string): void{
        //implement data logic
    }
}

class CloudSync {
    syncData(): void{
        //sync data
    }
}

class SecurityManager {
    encryptData(data: string): string{
         return "";
    }
}

decryptData(data: string): string{
    return "";
}

class offlineManager{
     addTransactionOffline(transaction: Expense | Income) :void{
        //implemet
     }

     syncOfflineTransactions(): void{
        //implements
     }
}

class ReminderManager {
    setReminders(reminder: string, date:Date): void{

    }
}

getReminders(): string[]{

    return[];
}